// jest expect 的斷句函式介紹.

/**
 * toBe(), 比對值是否相同, 為使用 Object.is(); 的方法, 使用 === 號判斷, 該方法只建議使用在簡單資料類型使用.
 *
 * 使用方式.
 * expect(result).toBe(data);
 */

expect(1).toBe(1); // true

expect("foo").toBe("foo"); // true

expect(null).toBe(null); // true

expect(undefined).toBe(undefined); // true

expect([]).toBe([]); // false

expect({ a: 1 }).toBe({ a: 1 }); // false

let foo = { a: 1 };
expect(foo).toBe(foo); // true
