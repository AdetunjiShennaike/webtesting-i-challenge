module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement < 20) {
    item.enhancement += 1
    return {...item }
  }
  else {
    return { ...item };
  }
}

function fail(item) {
  if (item.enhancement >= 16) {
    --item.enhancement
    return {...item}
  }
  else if (item.enhancement >= 15) {
    item.durability -= 10
    return {...item}
  }
  else if (item.enhancement >= 10) {
    item.durability -= 5
    return {...item}
  }
  else {
    return { ...item };
  }
}

function repair(item) {
  if(item.durability < 100) {
    item.durability = 100
    return  {...item}
  }
  else {
    return { ...item };
  }
}

function get(item) {
  if (item.enhancement == 0) {
    return item.name;
  }
  else {
    return `[+${item.enhancement}] ${item.name}`
  }
}
