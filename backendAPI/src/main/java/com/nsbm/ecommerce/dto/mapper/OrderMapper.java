package com.nsbm.ecommerce.dto.mapper;

import com.nsbm.ecommerce.dto.obj.OrderDto;
import com.nsbm.ecommerce.entity.Order;

public class OrderMapper {
    public static OrderDto mapToOrderDto(Order Order) {
        return new OrderDto(
                Order.getId(),
                Order.getUserId(),
                Order.getQuantity(),
                Order.getOrderStatus(),
                Order.getCreatedAt(),
                Order.getUpdatedAt()

        );
    }

    public static Order mapToOrder(OrderDto OrderDto) {
        return new Order(
                OrderDto.getId(),
                OrderDto.getUserId(),
                OrderDto.getQuantity(),
                OrderDto.getOrderStatus(),
                OrderDto.getCreatedAt(),
                OrderDto.getUpdatedAt());
    }
}
