interface NavigableComponentProps {
	children: JSX.Element[] | JSX.Element;
	id: string;
}

function NavigableComponent(props: NavigableComponentProps) {
	return (
		<div id={props.id} className="-mt-28 pt-28">
			{props.children}
		</div>
	);
}

export default NavigableComponent;
