import * as request from "@/utils/request";

export const saving = async () => {
  try {
    const res = await request.get("childrens/1");
    return res;
  } catch (error) {
    console.log(error);
  }
};
//Nếu trong object cần nhận từ bên ngoài vào thì để 2 tham số vào 
//ở sync()
export const gift = async () => {
  try {
    const res = await request.get("childrens/2");
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const slide = async () => {
  try {
    const res = await request.get("sections");
    return res;
  } catch (error) {
    console.log(error);
  }
}

export const product = async () => {
  try {
    const res = await request.get("products");
    return res;
  } catch (error) {
    console.log(error);
  }
}

export const about = async () => {
  try {
    const res = await request.get("about");
    return res;
  } catch (error) {
    console.log(error);
  }
}

export const help = async () => {
  try {
    const res = await request.get("help");
    return res;
  } catch (error) {
    console.log(error);
  }
}

export const contact = async () => {
  try {
    const res = await request.get("contact");
    return res;
  } catch (error) {
    console.log(error);
  }
}