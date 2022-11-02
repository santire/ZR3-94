/* eslint-disable no-console */
import { Grid, Image } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useNavStore } from '../store/store';
import { LinkButton } from './LinkButton/LinkButton';

export function Navigation() {
  const [isTransforming, setIsTransforming] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [isTransformationEnabled, setIsTransformationEnabled] = useState(false);
  const pages = useNavStore((state) => state.pages);
  const [pageAccess, setPageAccess] = useState({
    access: false,
    home: false,
    documents: false,
    effects: false,
    testimonials: false,
    ufos: false,
  });

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

  const handleXKey = (event: KeyboardEvent) => {
    if (event.key === 'x') {
      console.log('Activating transformation');
      setIsTransformationEnabled(true);
      setStartTime(new Date().getTime());
    }
  };

  useEffect(() => {
    setPageAccess(pages);
  }, [pages]);

  useEffect(() => {
    document.addEventListener('keydown', handleXKey, false);

    if (isTransformationEnabled) {
      console.log('setting start time');
      const timer = setInterval(() => {
        const currentTime = new Date().getTime();
        console.log(
          `time passed since activation: ${Math.floor((currentTime - startTime) / 1000)}s`
        );
        if (shouldTrigger(currentTime - startTime)) {
          setIsTransforming(true);
          clearInterval(timer);
        }
      }, 1000);
    }
    return () => {
      document.removeEventListener('keydown', handleXKey, false);
    };
  }, [isTransformationEnabled]);

  return (
    <div style={{ margin: '0 auto', maxWidth: 1280 }}>
      <Grid>
        <Grid.Col span={4}>
          <Grid align="center">
            <Grid.Col span={6}>
              <div
                style={
                  !isTransforming
                    ? {
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'relative',
                      }
                    : {
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'relative',
                        transform: 'translateX(440px) translateY(-30px) rotate(120deg)',
                        transition: 'ease-in 10s',
                      }
                }
              >
                <LinkButton
                  title="¿QUÉ ES EL ZR3-94?"
                  path="/home"
                  locked={isTransforming || !pageAccess.home}
                />
              </div>
              <div
                style={
                  !isTransforming
                    ? {
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'relative',
                      }
                    : {
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'relative',
                        transform: 'translateX(440px) translateY(30px) rotate(-60deg)',
                        transition: 'ease-in 10s',
                      }
                }
              >
                <LinkButton
                  title="ZR3-94 Y OVNIS"
                  path="/ufos"
                  locked={isTransforming || !pageAccess.ufos}
                />
              </div>
            </Grid.Col>
            <Grid.Col span={6}>
              <div
                style={
                  !isTransforming
                    ? {
                        display: 'flex',
                        justifyContent: 'left',
                        position: 'relative',
                      }
                    : {
                        display: 'flex',
                        justifyContent: 'left',
                        position: 'relative',
                        transform: 'translateX(200px)',
                        transition: 'ease-in 10s',
                      }
                }
              >
                <LinkButton
                  title="EFECTOS EN LA TIERRA"
                  path="/effects"
                  locked={isTransforming || !pageAccess.effects}
                />
              </div>
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col span={4}>
          <Image
            src="/assets/zr394.gif"
            radius={9000}
            style={{ position: 'relative', zIndex: 9999 }}
          />
        </Grid.Col>
        <Grid.Col span={4}>
          <Grid align="center">
            <Grid.Col span={6}>
              <div
                style={
                  !isTransforming
                    ? {
                        display: 'flex',
                        justifyContent: 'right',
                        position: 'relative',
                      }
                    : {
                        display: 'flex',
                        justifyContent: 'right',
                        position: 'relative',
                        transform: 'translateX(-200px)',
                        transition: 'ease-in 10s',
                      }
                }
              >
                <LinkButton
                  title="DOCUMENTOS CLASIFICADOS"
                  path="/documents"
                  locked={isTransforming || !pageAccess.documents}
                />
              </div>
            </Grid.Col>
            <Grid.Col span={6}>
              <div
                style={
                  !isTransforming
                    ? {
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'relative',
                      }
                    : {
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'relative',
                        transform: 'translateX(-440px) translateY(-30px) rotate(-120deg)',
                        transition: 'ease-in 10s',
                      }
                }
              >
                <LinkButton
                  title="TESTIMONIOS"
                  path="/testimonials"
                  locked={isTransforming || !pageAccess.testimonials}
                />
              </div>
              <div
                style={
                  !isTransforming
                    ? {
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'relative',
                      }
                    : {
                        display: 'flex',
                        justifyContent: 'center',
                        position: 'relative',
                        transform: 'translateX(-440px) translateY(30px) rotate(60deg)',
                        transition: 'ease-in 10s',
                      }
                }
              >
                <LinkButton
                  title="ACCESO AL ZR3-94"
                  path="/access"
                  locked={isTransforming || !pageAccess.access}
                />
              </div>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </div>
  );
}
