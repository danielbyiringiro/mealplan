const baseUrl = "https://api.mplan.ashesi.edu.gh/"
const currentBalance = "api/getCurrentBalance/"
const subscriberHistory = "api/getSubscriberHistory/"

const getFormattedDate = () =>
{
    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth() + 1
    const day = today.getDate()

    return `${year}-${month}-${day}`
}

const currentDate = getFormattedDate()

const getCurrentBalance = async (subscriberId) => 
{
    try
    {
        const response = await fetch(baseUrl + currentBalance + subscriberId)
        if (!response.ok)
        {
            throw new Error("Failed to fetch data")
        }
        const data = await response.json()
        return data
    }
    catch (error)
    {
        console.error('Error fetching current balance', error)
        throw error
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("subscriberForm").addEventListener("submit", async (event) => {
        event.preventDefault();

        const subscriberId = document.getElementById("subscriberId").value.trim();

        if (subscriberId !== '') {
            try {
                const balance = await getCurrentBalance(subscriberId);
                const history = await getSubscriberHistory(subscriberId);

                const outputDiv = document.getElementById("output");
                const productsDiv = document.getElementById("products");
                const results = document.getElementById("result")
                results.classList.remove("hide")

                productsDiv.innerHTML = ''
                const table = document.createElement('table')
                const header = document.createElement('tr')

                header.innerHTML = `
                        <th>Name</th>
                        <th>Cost (GHS)</th>
                        <th>Quantity</th>
                        <th>Cafeteria</th>
                    `;
                
                productsDiv.append(table)
                table.appendChild(header)

                if (balance.status === "success") {
                    outputDiv.innerHTML = `
                        <p>Name: ${balance.firstname} ${balance.lastname}</p>
                        <p>Day's Balance: ${balance.current_balance} GHS</p>
                        <p>Daily Limit: ${balance.daily_spending_limit} GHS</p>
                        <p>Total Balance: ${balance.amount} GHS</p>
                    `;

                    history.forEach(entry => {
                        const historyEntry = document.createElement('tr');
                        historyEntry.innerHTML = `
                            <td>${entry.name}</td>
                            <td>${entry.cost}</td>
                            <td>${entry.quantity}</td>
                            <td>${entry.transaction_point}</td>
                        `;
                        table.appendChild(historyEntry);
                    });
                } else {
                    outputDiv.innerHTML = `<p>${subscriberId} is not a registered meal plan subscriber ID</p>`;
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                outputDiv.innerHTML = `<p>Failed to fetch data for ${subscriberId}. Please try again later.</p>`;
            }
        } else {
            alert('Please enter a valid subscriber ID.');
        }
    });
});



const getSubscriberHistory = async (subscriberId) => 
{
    try
    {
        const response = await fetch(baseUrl + subscriberHistory + subscriberId + "/" + currentDate + "/" + currentDate)
        if (!response.ok)
        {
            throw new Error("Failed to fetch data")
        }
        const data = await response.json()
        return data
    }
    catch (error)
    {
        console.error('Error fetching subscriber history', error)
        throw error
    }
}
