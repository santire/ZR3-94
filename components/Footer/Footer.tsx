import { Box, Center, Divider, Group, Modal, Text, Tooltip } from '@mantine/core';
import { Fragment, useState } from 'react';
import useStyles from './Footer.styles';

interface CustomLinkProps {
  value: string;
  href: string;
}

const Terms = () => (
  <>
    <Text size={22}>TERMINOS Y CONDICIONES</Text>
    <br />
    <Text size={20} align="justify" p="xl">
      ¡Bienvenido a ZR3-94!
      <br />
      <br />
      Estos términos y condiciones describen las reglas y regulaciones para el uso del sitio web de
      IAT, ubicado en https://zr3-94.vercel.app/.
      <br />
      Al acceder a este contenido, asumimos que no leyó ninguno de los “Términos y condiciones''
      anteriores. No continúe usando ZR3-94 si no tiene ganas de aceptar el acuerdo con todos los
      términos y condiciones establecidos en esta página.
      <br />
      <br />
      Cookies
      <br />
      Al acceder a ZR3-94, aceptaste usar las cookies requeridas. El sitio web utiliza cookies para
      salvar al mundo y ayudar a personalizar su experiencia en línea.
      <br />
      <br />
      Una cookie es el alimento de uno de los títeres del programa educativo infantil Plaza Sésamo.
      Estas cookies están hechas a base de mantequilla y azúcar blanco y contienen chips de
      chocolate. Si las ingerís junto a un café con leche, el resultado es mucho más satisfactorio.
      <br />
      <br />
      Puedes encontrar cookies en tu supermercado más cercano y de confianza. Son ideales para la
      hora de la merienda y para compartir en una tarde con tus amigxs. Tenga en cuenta que al
      aceptar las Cookies requeridas, también acepta las Cookies de terceros, lo que puede referirse
      a que alguien pueda regalarle cookies con chips de chocolate.
      <br />
      <br />
      Licencia
      <br />
      Para obtener tu licencia de conducir por primera vez o si la vigencia de tu carnet lleva
      vencida más de un año, los requisitos para obtenerla/renovarla son:
      <br />
      <br />
      Requisitos
      <ul>
        <li>Tener DNI vigente con Domicilio en la Ciudad.</li>
        <li>
          Abonar la Boleta Única Inteligente (BUI) correspondiente al trámite, para poder Obtener un
          Turno (180 días de validez).
        </li>
        <li>
          Abonar el Certificado Nacional de Antecedentes de Tránsito (CENAT) (60 días de validez,
          una vez abonado).
        </li>
        <li>
          Tramitar el Certificado de Antecedentes Penales (solo categoría de profesional, 40 días de
          validez). Solicitá los Antecedentes Penales una vez hayas seleccionado el día y horario
          para asistir a una Sede.
        </li>
        <li>
          Presentar Certificado y/o Estudios Médicos (en caso de padecer alguna enfermedad o estar
          bajo tratamiento médico).
        </li>
        <li>Menores de 18 años: deberán cumplir con los siguientes Requisitos Adicionales.</li>
        <li>Extranjeros: deberán cumplir con los siguientes Requisitos Adicionales.</li>
      </ul>
      <br />
      <br />
      Costos del trámite
      <ul>
        <li>Otorgamiento de Licencia de Conducir: $2043</li>
        <li>Certificado Nacional de Antecedentes de Tránsito (CENAT): $1200</li>
      </ul>
      <br />
      Para más información ingresar a:
      https://www.buenosaires.gob.ar/tramites/otorgamiento-de-licencia-de-conducir
      <br />
      <br />
      Válido hasta el 21 de julio de 2094.Organizativos previos:Partes de este sitio web ofrecen a
      los usuarios la oportunidad de publicar e intercambiar opiniones e información en ciertas
      áreas del sitio web. IAT se reserva el derecho de monitorear todos los Comentarios y eliminar
      cualquier Comentario que pueda considerarse inapropiado, ofensivo o que cause el
      incumplimiento de estos Términos y Condiciones.
      <br />
      <br />
      Usted garantiza, declara y afirma que las siguientes personas pueden estar invitadas a su
      casamiento en caso de realizarse dentro de los próximos diez años. Y además no necesariamente
      deben participar del carnaval carioca o la mesa dulce.
      <br />
      <br />
      Lista de posibles invitados
      <ul>
        <li>Chino Darín</li>
        <li>Lali Esposito</li>
        <li>Lionel Messi</li>
        <li>Darío Barassi</li>
        <li>Elmo de Plaza Sésamo</li>
        <li>El mago sin dientes</li>
        <li>Bizarrap</li>
        <li>Ale Sergi</li>
        <li>Bruce Willis</li>
        <li>Duki</li>
      </ul>
      <br />
      <br />
      Consideramos el amor como algo que no se puede encontrar con facilidad y a su vez poder
      compartirlo con una (o varias) personas. La magia del verdadero amor no se encuentra en la
      botella de pociones del hada madrina, sino cualquier persona como Shrek junto a su burro y
      gato con botas podría robarla y cumplir el sueño del amor verdadero antes de medianoche.
      ZR3-94 en asesoramiento con IAT han enunciado una lista de “pociones de amor” encapsuladas en
      diversas plataformas/aplicaciones de citas para que puedas, de aquí a los próximos diez años,
      organizar y festejar tu casamiento con la persona indicada y cumplir con la lista de invitados
      previamente aceptada.
      <br />
      <br />
      Aplicaciones para encontrar al verdadero amor
      <ul>
        <li>Tinder</li>
        <li>Happn</li>
        <li>Badoo</li>
        <li>Bumble</li>
        <li>Inner Circle</li>
      </ul>
      <br />
      <br />
      Ofertas
      <br />
      Hemos organizado y clasificado los sitios de máxima calidad y seguridad para que puedas
      realizar una compra confiable sin riesgos. Nuestra intención no es restringir la información
      de los demás sitios web y ofertas, pero sí creemos conveniente que los siguientes enlaces han
      sido calificados con una reseña excelente y de cinco o más estrellas.
      <ul>
        <li>
          <a href="https://www.musimundo.com/">https://www.musimundo.com/</a>
        </li>
        <li>
          <a href="https://www.trivago.com.ar/es-AR">https://www.trivago.com.ar/es-AR</a>
        </li>
        <li>
          <a href="https://poki.com/es">https://poki.com/es</a>
        </li>
        <li>
          <a href="http://televisionparatodos.tv/">http://televisionparatodos.tv/</a>
        </li>
        <li>
          <a href="https://www.twitch.tv/coscu">https://www.twitch.tv/coscu</a>
        </li>
      </ul>
      <br />
      <br />
      Búsqueda laboral
      <br />
      Si te gustan los desafíos y sos una persona comprometida tenemos una oportunidad para vos,
      estamos buscando Investigadores de Anomalías Trascendentales para trabajar en una importante
      empresa ubicada en Buenos Aires. Las Vacantes a cubrir están distribuidas en distintas
      sucursales (a conveniencia del postulante).
      <br />
      Requisitos para ser un investigador de anomalías trascendentales:
      <br />
      - Secundario completo excluyente.
      <br />
      - Predisposición y dinamismo.
      <br />
      - Tener buena conducta con sus compañeros de trabajo.
      <br />
      - Traer bizcochitos para compartir.
      <br />
      - Disponibilidad horaria completa jornadas rotativas, incluye fines de semana.
      <br />
      - No se requiere experiencia previa.
      <br />
      <br />
      Horario:
      <br />- La estación opera los 365 días del año, 24 horas.- Los turnos de trabajo son de 8
      horas
      <ul>
        <li>Turno mañana de 06 a 14.</li>
        <li>Turno tarde de 14 a 22.</li>
        <li>Turno noche de 22 a 06.</li>
      </ul>
      <br />
      Principales responsabilidades:
      <br />
      - Despacho de combustible.
      <br />
      - Cobro por todos los medios de pago.
      <br />
      - Ofrecimiento de beneficios y promociones.
      <br />
      - Venta de lubricantes y aceites.Te invitamos a postularte a la brevedad, nos contactaremos
      con los postulantes seleccionados, manda tu CV al siguiente correo:
      IAT.investigaciones@gmail.com.
      <br />
      <br />
      Antes de continuar, asegurate de contar con todos los requisitos necesarios y enunciados hasta
      el momento, pero si no los recuerdas, te los dejamos en la siguiente lista:
      <ul>
        <li>2 tazas de harina leudante</li>
        <li>1 taza de azúcar</li>
        <li>1 taza de cacao (el que se utiliza para la chocolatada)</li>
        <li>1/2 taza de aceite</li>
        <li>2 huevos</li>
        <li>1 taza de agua hirviendo</li>
      </ul>
      <br />
      Responsabilidad por el contenido
      <br />
      No seremos responsables de ningún contenido que aparezca en su sitio web. Usted acepta que
      boca juniors es el más grande y nos protege y defiende contra todos los reclamos que se
      presenten en el sitio web. Ningún enlace debe aparecer en ningún sitio web que pueda
      interpretarse como calumnioso, obsceno o criminal, o que infrinja, de otro modo viole o
      promueva la infracción u otra violación de los derechos de terceros.
      <br />
      <br />
      Reserva de Derechos
      <br />
      Tiene el derecho a guardar silencio. Cualquier cosa que diga puede y será usada en su contra
      en un tribunal de justicia. Tiene el derecho de hablar con un abogado y que un abogado esté
      presente durante cualquier interrogatorio. Si no puede pagar un abogado, se le asignará uno
      pagado por el gobierno. ¿Le han quedado claro los derechos previamente mencionados?
      <br />
      <br />
      Si llegaste a leer atentamente todo estos Términos y condiciones, te felicitamos y nos
      encantaría recompensarte al respecto, pero este proyecto no es autosustentable y estamos
      perdiendo dinero por cada segundo que la página se encuentre activa.
      <br />
      Sin más preámbulo te dejamos el acceso a lo que realmente existe dentro del ZR3-94.
      <br />
      Que duermas bien y Dios ilumine tu camino celestial.
      <br />
      <br />
      Saludos cordiales!
    </Text>
  </>
);
const Nosotros = () => (
  <>
    <Text size={22}>SOBRE NOSOTROS</Text>
    <br />
    <Text size={20} align="justify" p="xl">
      Esta página web presenta el trabajo realizado por Investigadores de Anomalías Trascendentales
      (I.A.T), agrupación integrada por investigadores desertores de grandes y confidenciales
      estudios sobre avances tecnológicos. Nuestro objetivo es advertir o informar a la humanidad
      sobre el ZR3-94 y dar cuenta de los importantes acontecimientos que están ocurriendo en el
      mundo (como consecuencia del desarrollo del mismo) y que los gobiernos de mayor poder,
      encabezados por los Estados Unidos, quieren mantener ocultos.
    </Text>
  </>
);

const Frecuentes = () => (
  <>
    <Text size={22}>PREGUNTAS FRECUENTES</Text>
    <br />
    <Text size={20} align="justify" p="xl">
      ¿TODO ESTO ES REAL?
      <br />
      Investigadores de Anomalías Trascendentales se encuentran en condiciones de afirmar que toda
      la información contenida en el sitio web, responde al trabajo de incontables años que
      verifican los datos contemplados y registrados por los grandes gobiernos. De manera que si,
      esto es real y nuestro trabajo es alcanzar la información a las personas para que estén al
      tanto de los avances de la humanidad.
      <br />
      <br />
      ¿POR QUÉ ES POSIBLE QUE ALGO TAN GRANDE NO SEA DE VISIBILIDAD MASIVA?
      <br />
      Así como grandes acontecimientos relacionados a otros sectores de la sociedad aún se
      encuentran desconocidos tanto para nosotros como para el resto del mundo, la existencia del
      ZR3-94 logró durante muchos años el anonimato. Solo la valentía de personas partícipes y el
      compromiso de nuestros investigadores lograron dotar de relevancia a este gran suceso.
      <br />
      <br />
      ¿ES NORMAL TENER MIEDO?
      <br />
      Nuestro cuerpo de profesionales encargados de analizar el comportamiento y razonamiento de los
      demás integrantes de nuestra agrupación, afirman que la posibilidad del sentimiento de miedo
      es algo factible al estar expuesto a tal información oculta de una manera tan masiva.
      <br />
      <br />
      ¿CUÁNTOS MÁS EFECTOS DEL ZR3-94 SE HARÁN PRESENTES EN LA TIERRA?
      <br />
      Actualmente solo se pueden confirmar los casos mencionados en este sitio web, ya que el
      análisis de nuevas anomalías en base al funcionamiento del ZR3-94 es constante y a su vez
      requiere de varias validaciones, comparaciones y grandes extensiones de tiempo.
      <br />
      <br />
      ¿EL ZR3-94 ES EL ÚNICO AGUJERO NEGRO ARTIFICIAL CREADO?
      <br />
      A día de hoy estamos en condiciones de decir que si, el ZR3-94 perteneciente a Estados Unidos
      es el único en funcionamiento. Sin embargo no podemos ignorar la existencia de diferentes
      anomalías que suponen la existencia de similares agujeros negro de caracter artificial, solo
      es cuestion de tiempo confirmar a quienes pertenecen o cuales son sus origenes.
      <br />
      <br />
      ¿EL ZR3-94 TIENE ALGUNA FECHA LÍMITE DE EXISTENCIA?
      <br />
      Desde su creación el 21 de junio de 1994 no se pudo concluir en una respuesta exacta para
      todos los involucrados en su tiempo de vida. El ZR3-94 es el primer caso encontrado y
      analizado en profundidad, por lo tanto las posibilidades son infinitas pero día a día se sigue
      trabajando para responder las mayor cantidad de preguntas que siguen surgiendo.
    </Text>
  </>
);

export function Footer() {
  const { classes } = useStyles();
  const [opened, setOpened] = useState('none');

  const links = [
    { value: 'Sobre Nosotros', href: 'nosotros' },
    { value: 'Contacto', href: 'contacto' },
    { value: 'FAQS', href: 'faq' },
    { value: 'Términos y Condiciones', href: 't&c' },
  ];

  function CustomLink({ value, href }: CustomLinkProps) {
    return href === 'contacto' ? (
      <>
        <Tooltip label="IAT.investigaciones@gmail.com">
          <a
            href="mailto:IAT.investigaciones@gmail.com"
            className={classes.text}
            style={{ textDecoration: 'none' }}
          >
            {value}
          </a>
        </Tooltip>
      </>
    ) : (
      <p className={classes.text} onClick={() => setOpened(href)} style={{ cursor: 'pointer' }}>
        {value}
      </p>
    );
  }

  return (
    <>
      <Modal
        size="55%"
        opened={opened === 'nosotros'}
        onClose={() => setOpened('none')}
        withCloseButton
        overflow="inside"
        centered
        padding="xl"
      >
        <Nosotros />
      </Modal>

      <Modal
        size="55%"
        opened={opened === 'faq'}
        onClose={() => setOpened('none')}
        withCloseButton
        overflow="inside"
        padding="xl"
        centered
      >
        <Frecuentes />
      </Modal>
      <Modal
        size="55%"
        opened={opened === 't&c'}
        onClose={() => setOpened('none')}
        withCloseButton
        overflow="inside"
        padding="xl"
        centered
      >
        <Terms />
      </Modal>
      <Box style={{ maxWidth: 1280 }}>
        <Center>
          <Group>
            <Text className={classes.text}>
              <span className={classes.title}> ZR3-94 </span> © Todos los derechos reservados
            </Text>
            <Group>
              {links.map((p, i) => (
                <Fragment key={p.value}>
                  {i === 0 ? <div>|</div> : null}
                  <CustomLink {...p} />
                  <div>|</div>
                </Fragment>
              ))}
            </Group>
            <Divider orientation="vertical" color="#F5F5F5" />
            <Text className={classes.text}>
              VISITAS: <span className={classes.views}>1248</span>
            </Text>
          </Group>
        </Center>
      </Box>
    </>
  );
}
