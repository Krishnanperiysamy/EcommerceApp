export interface Category{
    id: number;
    category: string;
    subcategory: string;
}

export interface SuggestedProduct{

    banerimage : string;
    category : Category;

}

export interface NavigationItem{
    category : string;
    subcategories : string[];
}

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    mobile: string;
    password: string;
    createdAt: string;
    modifiedAt: string;
  }