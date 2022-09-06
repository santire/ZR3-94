import { Grid } from "@mantine/core";
import { LinkButton } from "./LinkButton/LinkButton";

export function Navigation() {
  return (
    <div style={{ margin: '0 52px' }}>
      <Grid>
        <Grid.Col span={4}>
          <Grid align='center'>
            <Grid.Col span={6}>
              <LinkButton title="¿QUÉ ES EL ZR3-94?" path="/home" />
              <LinkButton title="DOCUMENTOS CLASIFICADOS" path="/documents" />
            </Grid.Col>
            <Grid.Col span={6}>
              <LinkButton title="EFECTOS EN LA TIERRA" path="/effects" />
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col span={4}></Grid.Col>
        <Grid.Col span={4}>
          <Grid align='center'>
            <Grid.Col span={6}>
              <LinkButton title="ZR3-94 Y OVNIS" path="/ufos" />
            </Grid.Col>
            <Grid.Col span={6}>
              <LinkButton title="TESTIMONIOS" path="/testimonials" />
              <LinkButton title="ACCESO AL ZR3-94" path="/access" />
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </div>
  )
}
