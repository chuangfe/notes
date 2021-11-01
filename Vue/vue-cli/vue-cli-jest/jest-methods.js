// jest expect 的斷句函式介紹.

/**
 * expect(result).toMatchObject(data);
 * 介紹說明, 比較物件的屬性與屬性值, 只有 result 的屬性比 data 多, 測試才會通過.
 * 使用方式, 與 tobe 相同.
 */

/**
 * expect().toHaveBeenCalled();
 * 介紹說明, 為判斷某個函式是否被呼叫過.
 * 使用方式, 待補充.
 */

/**
 * expect().toHaveBeenCalledTimes();
 * 介紹說明, 為判斷某個函式呼叫的次數.
 * 使用方式, 待補充.
 */

/**
 * expect().toHaveBeenCalledWith(arg1, arg2, ...);
 * 介紹說明, 使用特定參數呼叫函式.
 * 使用方式, 待補充.
 */

/**
 * expect().toHaveBeenLastCalledWith(arg1, arg2, ...);
 * 介紹說明, 某個函式最後一次呼叫時的參數.
 * 使用方式, 待補充.
 */

/**
 * expect().toHaveBeenNthCalledWith(index, arg1, arg2, ...);
 * 介紹說明, 某個函式在第 index 次呼叫時的參數.
 * 使用方式, 待補充.
 */

/**
 * expect().toHaveReturned();
 * 介紹說明, 就測試的結果來看, 測試目標為函式是否會執行成功(代表沒有噴錯誤).
 * 使用方式.
 *
 * function testFunc() { let a = 1; }
 * // 函式需要使用 jest.fn(); 包裝.
 * const drink = jest.fn(testFunc);
 * // 需要先執行一次.
 * drink();
 * expect(drink).toHaveReturned();
 */

/**
 * expect().toHaveReturnedTimes(num);
 * 介紹說明, 與 toHaveReturned 相同, 測試改為函式執行成功的次數.
 * 使用方式.
 *
 * function testFunc() { let a = 1; }
 * // 函式需要使用 jest.fn(); 包裝.
 * const drink = jest.fn(testFunc);
 * // 需要先執.
 * drink();
 * drink();
 * expect(drink).toHaveReturnedTimes(2);
 */

/**
 * expect().toHaveReturnedWith(val);
 * 介紹說明, 確保函式返回指定的值.
 * 使用方式.
 *
 * const beverage = { name: "La Croix" };
 * const drink = jest.fn((beverage) => beverage.name);
 * drink(beverage);
 * expect(drink).toHaveReturnedWith("La Croix");
 */

/**
 * expect().toHaveLastReturnedWith(val);
 * 介紹說明, 確保函式最後呼叫時返回指定的值.
 * 使用方式.
 *
 * const beverage1 = { name: "La Croix (Lemon)" };
 * const beverage2 = { name: "La Croix (Orange)" };
 * const drink = jest.fn((beverage) => beverage.name);
 * drink(beverage1);
 * drink(beverage2);
 * // 這邊抓的是第二次執行的返回值.
 * expect(drink).toHaveLastReturnedWith("La Croix (Orange)");
 */

/**
 * expect().toHaveNthReturnedWith(index, val);
 * 介紹說明, 確保函式在第幾次執行時的返回值
 * 使用方式.
 *
 * const beverage1 = { name: "La Croix (Lemon)" };
 * const beverage2 = { name: "La Croix (Orange)" };
 * const drink = jest.fn((beverage) => beverage.name);
 * drink(beverage1);
 * drink(beverage2);
 * // 這邊抓的是第二次執行的返回值.
 * expect(drink).toHaveNthReturnedWith(2, "La Croix (Orange)");
 */

/**
 * expect(val).toHaveLength(num);
 * 介紹說明, 簡查 val 是否具有 length 屬性, 並將該屬性設為 num 值.
 * 使用方式, 適合針對 string array 的類型.
 */

/**
 * expect(object).toHaveProperty(key, val);
 * 介紹說明, 簡查 object 的屬性是否存在, 屬性值使否相同.
 * 使用方式.
 * 
 * const houseForSale = {
    bath: true,
    bedrooms: 4,
    kitchen: {
      amenities: ["oven", "stove", "washer"],
      area: 20,
      wallColor: "white",
      "nice.oven": true,
    },
    "ceiling.height": 2,
  };
 * 
 * // 簡查物件有沒有 bath 屬性.
 * expect(houseForSale).toHaveProperty("bath");
 * 
 * // 簡查物件有沒有多個屬性.
 * expect(houseForSale).toHaveProperty(["bath", "bedrooms"]);
 * 
 * // 簡查物件的屬性值.
 * expect(houseForSale).toHaveProperty("bedrooms", 4);
 * 
 * // 簡查物件屬性值的屬性值.
 * expect(houseForSale).toHaveProperty("kitchen.area", 20);
 * 
 * // 簡查物件是否沒有 pool 屬性.
 * expect(houseForSale).not.toHaveProperty("pool");
 */

/**
 * expect(floatingNum).toBeCloseTo(num, point);
 * 介紹說明, 假設 floatingNum 是有浮點的數值, 測試 floatingNum 的近似值是否為指定的 num.
 * point 可選擇用於判斷的小數位數.
 * 使用方式.
 */
