import { NavBar } from '../molecules/navBar';

import NavigableComponentList from '../molecules/wrappers/NavigableComponentList';

interface PageWithNavProps {
	links: {
		name: string;
		scrollTo: string;
		element: JSX.Element;
		inNav: boolean;
	}[];
}

function PageWithNav(props: PageWithNavProps) {
	return (
		<>
			<NavBar links={props.links.filter((link) => link.inNav)} />
			<NavigableComponentList
				components={props.links.map((link) => {
					return { element: link.element, id: link.scrollTo };
				})}
			/>
		</>
	);
}

export default PageWithNav;
