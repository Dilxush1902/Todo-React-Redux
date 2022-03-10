export const add = (name) => {
  return {
			type:"ADD",
			payload:name
		}
}

export const remove = (id) => {
  return {
			type:"REM",
			payload:id
		}
}

export const done = (id) => {
  return {
			type:"DONE",
			payload:id
		}
}
export const local = (data) => {
  return {
			type:"LOC",
			payload:data
		}
}