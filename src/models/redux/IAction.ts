export default interface IAction<T1, T2> {
  type: T1;
  payload: T2;
}
