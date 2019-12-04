export const updateProp = (initialProps, setProps, key, val) => {
    const newProps = Object.assign({}, initialProps, {[key]: val});
    setProps(newProps);
};