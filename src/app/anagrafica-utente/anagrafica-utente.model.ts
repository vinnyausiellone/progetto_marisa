export interface IntAnagrafica {
    id: number;
    body: string;
    title: string;
    userId: number;
}

export interface IntAnagraficaDettaglio {
    postId: number;
    id:number;
    name:string;
    email:string;
    body: string;
}

export interface IntPosts {
    id: number;
    title: string;
}

export interface IntPostsApprofondimento {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface IntNuovoPost {
    body: number;
}


