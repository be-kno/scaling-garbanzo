import json
import random
from datetime import datetime, timedelta

def generate_random_order():

    customer_names = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown"]
    dishes = [
        {"name": "Margherita Pizza", "base_price": 15},
        {"name": "Pasta Carbonara", "base_price": 12},
        {"name": "Caesar Salad", "base_price": 10},
        {"name": "Grilled Salmon", "base_price": 18}
    ]
    special_requests_options = ["Extra cheese", "Less salt", "No onions", "Extra spicy", ""]


    order_details = []
    for _ in range(random.randint(1, 4)):  
        dish = random.choice(dishes)
        order_details.append({
            "dish": dish["name"],
            "quantity": random.randint(1, 3),
            "price": round(dish["base_price"] * random.uniform(0.9, 1.1), 2),
            "specialRequests": random.choice(special_requests_options)
        })

    # Generate other random order attributes
    order = {
        "customerName": random.choice(customer_names),
        "tableNumber": random.randint(1, 20),
        "orderDetails": order_details,
        "orderTime": (datetime.now() - timedelta(minutes=random.randint(0, 60))).isoformat() + "Z",
        "isCompleted": random.choice([True, False])
    }

    return order


random_order = generate_random_order()
order_json = json.dumps(random_order, indent=4)
print(order_json)