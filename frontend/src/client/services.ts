import type { CancelablePromise } from "./core/CancelablePromise";
import { OpenAPI } from "./core/OpenAPI";
import { request as __request } from "./core/request";

import type {
    Ingredient,
    Recipe,
    UserRequest
} from "./models"

export class RecipeServices {
    public static get_Recipe(
        data: UserRequest
    ): CancelablePromise<Recipe> {
        console.log(data.choice)
        return __request(OpenAPI,
            {
                method: "POST",
                url: "/api/dish/query",
                body: data,
                headers: {
                    Accept: "application/json"
                }
            }
        )

    }
}