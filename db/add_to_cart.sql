DELETE from CART 
WHERE user_id = $1 and product_id = $2;

INSERT INTO CART(
  user_id,
  product_id,
  quantity
)
VALUES(
  $1,
  $2,
  $3
);

SELECT * from CART c
JOIN Products p on
c.product_id = p.product_id
where c.user_id = $1
order by c.product_id;