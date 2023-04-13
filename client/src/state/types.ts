export interface expensesByCategory {
  salaries: number;
  supplies: number;
  services: number;
}

export interface Day {
  id: string;
  date: string;
  revenue: number;
  expenses:number;
}
export interface Month {
    id: string;
    month: string;
    revenue: number;
    expenses:number;
    nonOperationalExpenses: number;
    operationalExpenses: number;
  }


export interface GetKpisResponse {
  id: string;
  _id: string;
  __v: number;
  totalProfit: number;
  totalRevenue: number;
  totalExpenses: number;
  expensesByCategory: expensesByCategory;
  monthlyData: Array<Month>;
  dailyData: Array<Day>;
  createAt: string;
  updatedAt: string;
}

export interface GetProductsResponse {
  id: string;
  _id: string;
  __v: number;
  price: number;
  expense: number;
  transaction: Array<string>;
  createAt: string;
  updatedAt: string;

}


export interface GetTransactionsResponse {
  id: string;
  _id: string;
  __v: number;
  amount: number;
  buyer: string;
  productIds: Array<string>;
  createAt: string;
  updatedAt: string;

}
