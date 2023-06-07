import * as Yup from "yup"

export const playerData = Yup.object().shape({
  age: Yup.number()
    .required("Age is required")
    .min(18, "Age must be between 18 and 38")
    .max(38, "Age must be between 18 and 38"),
  goals: Yup.number()
    .required("Goals scored is required")
    .max(36, "Goals scored cannot be greater than 36"),
  assists: Yup.number()
    .required("Assists is required")
    .max(21, "Assistes provided cannot be greater than 21"),
  games: Yup.number()
    .required("Games played is required")
    .max(38, "A player cannot play in more than 38 games"),
  starts: Yup.number()
    .required("Games started is required")
    .max(
      Yup.ref("games"),
      "Games started must be less than or equal to games played"
    ),
  ppg: Yup.number()
    .required("Points per game is required")
    .min(0.7, "Points per game must be between .3 and 2.8")
    .max(2.8, "Points per game must be between .7 and 2.8"),
})
