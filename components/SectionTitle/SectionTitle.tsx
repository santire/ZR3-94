import useStyles from './SectionTitle.styles';

interface SectionTitleProps {
  title: string;
  fontSize?: number;
  weight?: number;
  align?: 'left' | 'center' | 'right';
  noLine?: boolean;
}

export function SectionTitle({ title, fontSize, weight, align, noLine }: SectionTitleProps) {
  const { classes } = useStyles();
  const divStyle = {
    fontSize: fontSize ?? 24,
    fontWeight: weight ?? 500,
    textAlign: align ?? 'left',
  };
  return (
    <div
      className={align == 'right' ? classes.titleRight : classes.title}
      style={noLine ? { borderBottom: 'none', ...divStyle } : divStyle}
    >
      <span>{title}</span>
    </div>
  );
}
