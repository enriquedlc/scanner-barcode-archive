export const data = {
	labels: ["January", "February", "March", "April", "May", "June"],
	datasets: [
		{
			data: [50, 20, 2, 86, 71, 100],
			color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
		},
		{
			data: [20, 10, 4, 56, 87, 90],
		},
		{
			data: [30, 90, 67, 54, 10, 2],
		},
	],
};
