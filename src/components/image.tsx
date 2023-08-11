import { component$ } from '@builder.io/qwik';
import { Image } from '@unpic/qwik';

interface Props {
	className?: string;
	src: string;
	alt: string;
	width?: number;
	height?: number;
}

export default component$(({ className, alt, src, width, height }: Props) => {
	return (
		<Image
			layout='constrained'
			width={width || 500}
			height={height || 500}
			alt={alt}
			src={src}
			class={className}
		/>
	);
});
