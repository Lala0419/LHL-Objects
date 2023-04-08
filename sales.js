const salesTaxRates = {
	AB: 0.05,
	BC: 0.12,
	SK: 0.1,
};

const companySalesData = [
	{
		name: "Telus",
		province: "BC",
		sales: [100, 200, 400],
	},
	{
		name: "Bombardier",
		province: "AB",
		sales: [80, 20, 10, 100, 90, 500],
	},
	{
		name: "Telus",
		province: "SK",
		sales: [500, 100],
	},
];

const calculateSalesTax = function (salesData, taxRates) {
	let results = {};
	for (const data of salesData) {
		const name = data.name;
		const province = data.province;
		const sales = data.sales.reduce((a, b) => a + b, 0);
		const taxRate = taxRates[province];
		const taxes = sales * taxRate;
		const totalSales = results[name] ? results[name].totalSales + sales : sales;
		const totalTaxes = results[name] ? results[name].totalTaxes + taxes : taxes;

		results[name] = {
			totalSales: totalSales,
			totalTaxes: totalTaxes,
		};
		console.log("results[name]", results[name]);
		/**
		 * results[name] { totalSales: 700, totalTaxes: 84 }
		 * results[name] { totalSales: 800, totalTaxes: 40 }
		 * results[name] { totalSales: 1300, totalTaxes: 144 }
		 */
	}
	console.log(results);
	return results;
};
const results = calculateSalesTax(companySalesData, salesTaxRates);
/**
 * expected results:
 * {
 * Telus: {
 *  totalSales: 1300,
 *  totalTaxes: 144
 *  },
 * Bombardier: {
 *  totalSales: 800,
 *  totalTaxes: 40
 *  }
 * }
 */
