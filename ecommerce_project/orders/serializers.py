# serializers.py

from rest_framework import serializers
from .models import CartItem

class CartItemSerializer(serializers.ModelSerializer):
    product_name = serializers.CharField(source="product.name", read_only=True)
    price = serializers.DecimalField(source="product.price", max_digits=10, decimal_places=2, read_only=True)
    image = serializers.URLField(source="product.image", read_only=True)
    subtotal = serializers.SerializerMethodField()

    class Meta:
        model = CartItem
        fields = [
            "id",
            "product_name",
            "price",
            "quantity",
            "image",
            "subtotal",
        ]

    def get_subtotal(self, obj):
        return obj.product.price * obj.quantity