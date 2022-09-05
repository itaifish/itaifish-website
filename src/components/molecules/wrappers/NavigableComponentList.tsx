import NavigableComponent from './NavigableComponent';

interface NavigableComponentListProps {
	components: { element: JSX.Element; id: string }[];
}

function NavigableComponentList(props: NavigableComponentListProps) {
	return (
		<>
			{props.components.map((component, idx) => (
				<NavigableComponent key={idx} id={component.id}>
					{component.element}
				</NavigableComponent>
			))}
		</>
	);
}

export default NavigableComponentList;
