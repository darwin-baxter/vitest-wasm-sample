import workerpool from "workerpool";
/** @ts-expect-error ignore: https://v3.vitejs.dev/guide/features.html#import-with-query-suffixes  */
import APIWorkerURL from "./api_worker?url&worker";

const optimum_api_workers = 1;

// Create pool of workers for "api_worker" script
export const apiWorkerPool = workerpool.pool(APIWorkerURL, {
	minWorkers: "max",
	maxWorkers: optimum_api_workers,
	workerType: "web",
	workerOpts: { type: "module" }
});

export const testDemo = async () => {
	console.log(apiWorkerPool);
	const res = await apiWorkerPool.exec("getSquare", [5]);
	console.log(res);
	return res;
};