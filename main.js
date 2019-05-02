fetch("http://localhost:3000/dealer")
    .then(result => result.json())
    .then(dealer => {
        const date = dealer.filter(v => v.purchase_date.split("-")[0] === "2017")

        const sales2017 = date.map(v => v.gross_profit).reduce((acc, next) => acc + next)

        const monMostSales = date.map(v => v.purchase_date.split("-")[1]).reduce((acc, next) => {
            acc[next] = (acc[next] || 0) + 1
            return acc
        }, {})

        const mon = Object.keys(monMostSales).reduce((a, b) => monMostSales[a] > monMostSales[b] ? a : b)

        const salesperson = dealer.map(v => v.sales_agent.first_name + ` ` + v.sales_agent.last_name).reduce((acc, next) => {
            acc[next] = (acc[next] || 0) + 1
            return acc
        }, {})

        const personMostSale = Object.keys(salesperson).reduce((a, b) => salesperson[a] > salesperson[b] ? a : b)

        const personProfit = dealer.map(v => v.sales_agent.first_name + ` ` + v.sales_agent.last_name).map(p => p.gross_profite)


        console.log(personProfit)
        console.log(personMostSale)
        console.log(salesperson)
        console.log(mon)
        console.log(sales2017)
        console.log(monMostSales)
    })