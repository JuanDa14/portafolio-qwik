import { component$ } from '@builder.io/qwik';
import { abilities } from '~/data/seed';

interface Props {
	type: 'Frontend' | 'Backend' | 'DataBase' | 'Others';
}

export default component$(({ type }: Props) => {
	return (
		<>
			<h3 class='mb-2 text-xl font-semibold dark:text-white capitalize'>{type}</h3>
			<ul class='text-gray-500 dark:text-gray-400'>
				{abilities
					.filter((props) => props.type === type)
					.map((ability) => (
						<li key={ability.name}>{ability.name}</li>
					))}
			</ul>
		</>
	);
});
