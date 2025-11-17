


export const fetchProductCatalog = (): Promise<{ id: number; name: string; price: number }[]> => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.8) {
        resolve([
            { id: 1, name: "Laptop", price: 1200 },
            { id: 2, name: "Headphones", price: 200 },
        ]);
        } else {
        reject("Failed to fetch product catalog");
        }
    }, 1000);
    });
};

export const fetchProductReviews = (productId: number): Promise<{ id: number; name: string; comment: string }[]> => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.8) {
        resolve([
            { id: 1, name: "Devon", comment: "It works great!" },
            { id: 1, name: "Anthony", comment: "I hate it." },
            { id: 2, name: "Damian", comment: "Great Volume!" },
            { id: 2, name: "Tim", comment: "They look cool." },
        ]);
        } else {
        reject(`Failed to fetch reviews for product ID ${productId}`);
        }
    }, 1500);
    });
};

export const fetchSalesReport = (): Promise<{ totalSales: number; unitsSold: number; averagePrice: number }[]> => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.8) {
        resolve([
            { totalSales: 500, unitsSold: 20, averagePrice: 25},
            { totalSales: 200, unitsSold: 20, averagePrice: 10},
        ]);
        } else {
        reject("Failed to fetch sales report");
        }
    }, 1500);
    })
};