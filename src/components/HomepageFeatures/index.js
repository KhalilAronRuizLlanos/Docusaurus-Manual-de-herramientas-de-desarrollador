import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fácil de usar',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus fue diseñado desde cero para ser instalado y utilizado fácilmente,
        y así poner tu sitio web en funcionamiento rápidamente.
      </>
    ),
  },
  {
    title: 'Enfócate en lo que importa',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus te permite centrarte en tu documentación, y nosotros nos encargamos de las tareas tediosas. Adelante, mueve tus documentos al directorio <code>docs</code>.
      </>
    ),
  },
  {
    title: 'Impulsado por React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extiende o personaliza el diseño de tu sitio web reutilizando React. Docusaurus puede ser
        ampliado mientras se reutilizan el mismo encabezado y pie de página.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
