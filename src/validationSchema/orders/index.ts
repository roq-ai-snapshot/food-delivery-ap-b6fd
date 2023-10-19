import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  order_date: yup.date().required(),
  total_price: yup.number().integer().required(),
  delivery_address: yup.string().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
});
