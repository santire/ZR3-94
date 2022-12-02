/* eslint-disable no-console */
import { Anchor, Image } from '@mantine/core';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useNavStore, useTransformStore } from '../components/store/store';

export default function LHomePageandingPage() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [isTransformationEnabled, setIsTransformationEnabled] = useState(false);
  const clearVisited = useNavStore((state) => state.clearVisited);
  const setTransformStartTime = useTransformStore((state) => state.setStartTime);
  const setTransformPeriod = useTransformStore((state) => state.setTransformPeriod);
  const clearTransform = useTransformStore((state) => state.clearTransform);

  function probability(time: number): number {
    const m = 1 / 10000;
    const y = m * time;

    return y < 1 ? y : 1;
  }

  function shouldTrigger(time: number): boolean {
    const p = probability(time);
    const willTrigger = Math.random() <= probability(time);

    console.log(`p: ${p}`);
    console.log(`willTrigger: ${willTrigger}`);

    return willTrigger;
  }

  const rand_nd = (mean: number, std: number) => {
    const u1 = Math.random();
    const u2 = Math.random();

    const z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);

    return z0 * std + mean;
  };

  const startRandomDecay = () => {
    setTransformStartTime(new Date().getTime());
    const mean_minutes = 30;
    const deviation = 1.4;
    const decayPeriod = Math.ceil(rand_nd(mean_minutes, deviation) * 60 * 1000);
    const decayMins = decayPeriod / (60 * 1000);
    console.log(`decaying in: ${Math.round((decayMins + Number.EPSILON) * 100) / 100} mins`);
    setTransformPeriod(decayPeriod);
  };

  const handleXKey = (event: KeyboardEvent) => {
    if (event.key === 'x') {
      console.log('Activating transformation');
      setIsTransformationEnabled(true);
      setStartTime(new Date().getTime());
    }
  };
  useEffect(() => {
    clearVisited();
    clearTransform();
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleXKey, false);

    if (isTransformationEnabled) {
      console.log('setting start time');
      const timer = setInterval(() => {
        const currentTime = new Date().getTime();
        console.log(
          `time passed since activation: ${Math.floor((currentTime - startTime) / 1000)} s`
        );
        if (shouldTrigger(currentTime - startTime)) {
          setIsDisabled(true);
          clearInterval(timer);
        }
      }, 1000);
    }
    return () => {
      document.removeEventListener('keydown', handleXKey, false);
    };
  }, [isTransformationEnabled]);

  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: 425,
      }}
    >
      {isDisabled ? (
        <Image radius={1000} src="/assets/zr394.gif" />
      ) : (
        <Link href="/home" passHref>
          <Anchor>
            <Image radius={1000} src="/assets/zr394.gif" onClick={() => startRandomDecay()} />
          </Anchor>
        </Link>
      )}
    </div>
  );
}
