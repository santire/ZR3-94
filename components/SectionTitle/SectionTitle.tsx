import useStyles from './SectionTitle.styles';

interface SectionTitleProps {
  title: string;
  fontSize?: number;
  weight?: number;
}

export function SectionTitle({ title, fontSize, weight }: SectionTitleProps) {
  const { classes } = useStyles();
  return (
    <div className={classes.title} style={{ fontSize: fontSize ?? 24, fontWeight: weight ?? 500 }}>
      <span>{title}</span>
    </div>
  );
}
