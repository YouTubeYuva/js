hotel_data = [
    {
        "id": 4,
        "date": "2024-07-27",
        "price": 165,
        "name": "Hotel City Center"
    },
    {
        "id": 1,
        "date": "2024-07-27",
        "price": 135,
        "name": "Hotel Sunshine"
    },
    {
        "id": 1,
        "date": "2024-07-28",
        "price": 140,
        "name": "Hotel Sunshine"
    },
    {
        "id": 5,
        "date": "2024-07-27",
        "price": 240,
        "name": "Hotel Lakeside"
    },
    {
        "id": 2,
        "date": "2024-07-28",
        "price": 240,
        "name": "Hotel Ocean View"
    },
    {
        "id": 2,
        "date": "2024-07-31",
        "price": 260,
        "name": "Hotel Ocean View"
    },
    {
        "id": 5,
        "date": "2024-07-24",
        "price": 225,
        "name": "Hotel Lakeside"
    },
    {
        "id": 4,
        "date": "2024-07-23",
        "price": 150,
        "name": "Hotel City Center"
    },
    {
        "id": 5,
        "date": "2024-07-26",
        "price": 235,
        "name": "Hotel Lakeside"
    },
    {
        "id": 3,
        "date": "2024-07-26",
        "price": 195,
        "name": "Hotel Mountain Retreat"
    },
    {
        "id": 4,
        "date": "2024-07-25",
        "price": 160,
        "name": "Hotel City Center"
    },
    {
        "id": 1,
        "date": "2024-08-01",
        "price": 155,
        "name": "Hotel Sunshine"
    },
    {
        "id": 4,
        "date": "2024-07-29",
        "price": 175,
        "name": "Hotel City Center"
    },
    {
        "id": 4,
        "date": "2024-07-28",
        "price": 170,
        "name": "Hotel City Center"
    },
    {
        "id": 2,
        "date": "2024-07-24",
        "price": 210,
        "name": "Hotel Ocean View"
    },
    {
        "id": 2,
        "date": "2024-07-30",
        "price": 250,
        "name": "Hotel Ocean View"
    },
    {
        "id": 4,
        "date": "2024-07-24",
        "price": 155,
        "name": "Hotel City Center"
    },
    {
        "id": 1,
        "date": "2024-07-24",
        "price": 125,
        "name": "Hotel Sunshine"
    },
    {
        "id": 3,
        "date": "2024-07-23",
        "price": 180,
        "name": "Hotel Mountain Retreat"
    },
    {
        "id": 4,
        "date": "2024-08-01",
        "price": 185,
        "name": "Hotel City Center"
    },
    {
        "id": 5,
        "date": "2024-07-23",
        "price": 220,
        "name": "Hotel Lakeside"
    },
    {
        "id": 5,
        "date": "2024-07-31",
        "price": 255,
        "name": "Hotel Lakeside"
    },
    {
        "id": 2,
        "date": "2024-07-23",
        "price": 200,
        "name": "Hotel Ocean View"
    },
    {
        "id": 1,
        "date": "2024-07-23",
        "price": 120,
        "name": "Hotel Sunshine"
    },
    {
        "id": 3,
        "date": "2024-08-01",
        "price": 220,
        "name": "Hotel Mountain Retreat"
    },
    {
        "id": 3,
        "date": "2024-07-30",
        "price": 210,
        "name": "Hotel Mountain Retreat"
    },
    {
        "id": 3,
        "date": "2024-07-28",
        "price": 200,
        "name": "Hotel Mountain Retreat"
    },
    {
        "id": 5,
        "date": "2024-07-30",
        "price": 250,
        "name": "Hotel Lakeside"
    },
    {
        "id": 5,
        "date": "2024-07-29",
        "price": 245,
        "name": "Hotel Lakeside"
    },
    {
        "id": 1,
        "date": "2024-07-25",
        "price": 130,
        "name": "Hotel Sunshine"
    },
    {
        "id": 5,
        "date": "2024-08-01",
        "price": 260,
        "name": "Hotel Lakeside"
    },
    {
        "id": 3,
        "date": "2024-07-31",
        "price": 215,
        "name": "Hotel Mountain Retreat"
    },
    {
        "id": 2,
        "date": "2024-07-27",
        "price": 230,
        "name": "Hotel Ocean View"
    },
    {
        "id": 2,
        "date": "2024-08-01",
        "price": 270,
        "name": "Hotel Ocean View"
    },
    {
        "id": 4,
        "date": "2024-07-30",
        "price": 180,
        "name": "Hotel City Center"
    },
    {
        "id": 3,
        "date": "2024-07-24",
        "price": 185,
        "name": "Hotel Mountain Retreat"
    },
    {
        "id": 2,
        "date": "2024-07-26",
        "price": 220,
        "name": "Hotel Ocean View"
    },
    {
        "id": 5,
        "date": "2024-07-25",
        "price": 230,
        "name": "Hotel Lakeside"
    },
    {
        "id": 3,
        "date": "2024-07-25",
        "price": 190,
        "name": "Hotel Mountain Retreat"
    },
    {
        "id": 1,
        "date": "2024-07-29",
        "price": 145,
        "name": "Hotel Sunshine"
    },
    {
        "id": 3,
        "date": "2024-07-29",
        "price": 205,
        "name": "Hotel Mountain Retreat"
    },
    {
        "id": 1,
        "date": "2024-07-31",
        "price": 150,
        "name": "Hotel Sunshine"
    }
]

const _ = require('lodash');

const datas = _.sortBy(_.uniq(_.map(hotel_data, "date")));
const group = _.groupBy(hotel_data, "id");
const output = [];
_.forEach(group, (records, id) => {
    const name = _.head(_.uniq(_.map(records, "name")));
    const max_price = _.maxBy(records, "price");
    const max_price_date = max_price.date;
    const prices = _.map(datas, x => {
        const record = _.find(records, { date: x });
        return _.get(record, "price", null);
    });
    function details(arr) {
        const max_count = [];
        let current_count = 0; 
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] != null) {
                current_count += 1;
            } else {
                if (current_count > 0) {
                    max_count.push(current_count);
                }
                current_count = 0;
            }
        }
        if (current_count > 0) {
            max_count.push(current_count);
            return max_count;
        }
    }
    const max_price_count = _.max(details(prices)) || 0;
    output.push([id, name, ...prices, max_price_date, max_price_count]);
});
const header = ['id', 'name', 'dates', 'date of max price', 'max_price_count'];
const finalOutput = [header,...output];
console.log(finalOutput);

