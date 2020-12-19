/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
  for (let i = 0; i < array.length; ++i) {
    let item = array[i];
    fn(item, i, array);
  }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    const itemClone = fn(item, i, array);
    newArr.push(itemClone);
  }

  return newArr;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
  let value = initial || array[0];

  for (let i = initial ? 0 : 1; i < array.length; i++) {
    let currentValue = array[i];
    value = fn(value, currentValue, i, array);
  }
  return value;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
  let keys = Object.keys(obj);
  let arr = [];
  arr = keys;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    item.toString();
    newArr.push(item.toUpperCase());
  }
  return newArr;
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from, to) {
  let result = [];
  let start = from;
  let end = Math.min(to, array.length);

  if (typeof from !== 'number' && to === 0) {
    result = [];
  } else if (typeof from !== 'number' && !to) {
    result = array;
  } else if (typeof from !== 'number' && to > 0) {
    for (let i = 0; i < end; i++) {
      result.push(array[i]);
    }
  } else if (typeof from !== 'number' && to < 0) {
    for (let i = 0; i < array.length + end; i++) {
      result.push(array[i]);
    }
  } else if (typeof from !== 'number' && typeof from !== 'number') {
    result = [];
  } else if (from < 0 && from + array.length < 0 && to < 0) {
    for (let i = 0; i < array.length + end; i++) {
      result.push(array[i]);
    }
  } else if (from < 0 && to < 0) {
    for (let i = array.length + start; i < array.length + end; i++) {
      result.push(array[i]);
    }
  } else if (from === 0 && to === 0) {
    result = [];
  } else if (from < 0 && from + array.length < 0 && !to) {
    result = array;
  } else if (from < 0 && from + array.length < 0) {
    for (let i = 0; i < end; i++) {
      result.push(array[i]);
    }
  } else if (!to && from < 0) {
    for (let i = array.length + start; i < array.length; i++) {
      result.push(array[i]);
    }
  } else if (!to && from >= 0) {
    for (let i = start; i < array.length; i++) {
      result.push(array[i]);
    }
  } else if (to < 0) {
    for (let i = start; i < array.length + end; i++) {
      result.push(array[i]);
    }
  } else {
    for (let i = start; i < end; i++) {
      result.push(array[i]);
    }
  }
  return result;
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
  let proxy = new Proxy(obj, {
    set(obj, prop, val) {
      obj[prop] = val * val;
      return true;
    },
  });
  return proxy;
}

export { forEach, map, reduce, upperProps, slice, createProxy };
