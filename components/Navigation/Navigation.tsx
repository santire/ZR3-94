import { Grid, Image } from '@mantine/core';
import { LinkButton } from './LinkButton/LinkButton';

export function Navigation() {
  return (
    <div style={{ margin: '0 auto', maxWidth: 1280 }}>
      <Grid>
        <Grid.Col span={4}>
          <Grid align="center">
            <Grid.Col span={6}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <LinkButton title="¿QUÉ ES EL ZR3-94?" path="/home" />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <LinkButton title="DOCUMENTOS CLASIFICADOS" path="/documents" />
              </div>
            </Grid.Col>
            <Grid.Col span={6}>
              <div style={{ display: 'flex', justifyContent: 'left' }}>
                <LinkButton title="EFECTOS EN LA TIERRA" path="/effects" />
              </div>
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col span={4}>
          <Image src="/assets/zr394.gif" radius={9000} />
        </Grid.Col>
        <Grid.Col span={4}>
          <Grid align="center">
            <Grid.Col span={6}>
              <div style={{ display: 'flex', justifyContent: 'right' }}>
                <LinkButton title="ZR3-94 Y OVNIS" path="/ufos" />
              </div>
            </Grid.Col>
            <Grid.Col span={6}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <LinkButton title="TESTIMONIOS" path="/testimonials" />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <LinkButton title="ACCESO AL ZR3-94" path="/access" />
              </div>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </div>
  );
}
