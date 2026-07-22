import random
import pandas as pd

from django.core.management.base import BaseCommand
from products.models import Product, Category


class Command(BaseCommand):
    help = "Import Amazon products"

    def handle(self, *args, **kwargs):

        csv_file = r"C:\Users\m4558\OneDrive\Documents\INTERVIEW PREPARATION\Ecommerce_Full_stack\ecommerce_project\Toys and Games.csv"

        df = pd.read_csv(csv_file)

        # Import only first 100 products for testing
        df = df.head(100)

        category = Category.objects.get(id=1)

        for index, row in df.iterrows():

            try:
                price = row["actual_price"]

                if pd.isna(price):
                    price = row["discount_price"]

                price = str(price).replace("₹", "").replace(",", "")

                try:
                    price = float(price)
                except:
                    price = 0

                Product.objects.create(
                    category=category,
                    name=row["name"],
                    description=f"{row['main_category']} - {row['sub_category']}",
                    price=price,
                    stock=random.randint(10, 100),
                    image=row["image"],
                    created_by="Amazon Dataset",
                    updated_by="Amazon Dataset",
                )

                print(f"{index+1} Imported")

            except Exception as e:
                print(e)

        print("Finished")