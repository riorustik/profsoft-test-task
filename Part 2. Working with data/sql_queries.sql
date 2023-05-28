-- №1
SELECT
    R.name
FROM
    Restaurants AS R
    JOIN Employees AS E ON R.id = E.restaurantId
    JOIN Positions AS P ON P.id = E.positionId
WHERE
    P.title = 'waiter'
GROUP BY
    R.name
HAVING
    COUNT(E.positionId) >= 2
ORDER BY
    R.name DESC

-- №2
INSERT INTO
    Employees (
        restaurantId,
        firstname,
        lastname,
        phone,
        positionId
    )
VALUES
    (3, 'Rustam', 'Kusiapkulov', '89658788851', '4')