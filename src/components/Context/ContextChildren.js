import React, { useContext } from "react";
import { CountContext } from "./ContextParent";

export const ChildA = () => {
	console.log(`ChildA Render`);
	return (
		<div>
			<div>ChildA Component</div>
			<ChildB />
		</div>
	);
};

export const MemoizedChildA = React.memo(ChildA);

export const ChildB = () => {
	console.log(`ChildB Render`);
	return (
		<div>
			<div>ChidlB Component</div>
			<ChildC />
		</div>
	);
};

export const ChildC = () => {
	const count = useContext(CountContext);
	console.log(`ChildC Render`);
	return (
		<div>
			<div>Child C count = {count}</div>
		</div>
	);
};
