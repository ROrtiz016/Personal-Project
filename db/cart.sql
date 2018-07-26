SELECT * from CART c
JOIN Products p on
c.product_id = p.product_id
where c.user_id = $1
order by c.product_id;