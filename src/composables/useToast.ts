export function useToast(messType: string, toastData: object, duration: number, eleId: number) {
	const arrayMess = JSON.parse(JSON.stringify(toastData));
	const box = document.getElementById('messbox');
	const el = document.createElement("div");
	el.textContent = arrayMess[messType];
	let cls: string = "";
	let clsDefault: string = "p-3 rounded-lg border border-solid border-indigo-500 bg-indigo-100 w-full ";
	if(messType=='success') { 
		cls = "bg-green-100 border-green-500";
	} else if(messType=='error') {
		cls = "bg-red-100 border-red-500";
	}
	el.setAttribute('id', `id${eleId+=1}`);
	el.setAttribute('class', clsDefault+cls);
	box?.appendChild(el);
	return eleId;
}