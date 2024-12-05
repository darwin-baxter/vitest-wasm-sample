/* eslint-disable @typescript-eslint/no-magic-numbers */
import workerpool from "workerpool";

const getSquare = (x: number) => {
	return x * x;
};

workerpool.worker({
	getSquare
});
