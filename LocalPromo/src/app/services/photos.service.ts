import { Injectable } from '@angular/core';

export interface Photos {
  id: number;
  photo_url: string;
  liked: boolean;
  description: string;
  comment_count: number;
  comment: Comment[];
  place: string;
  user: {
    id: number;
    photo_url: string;
    name: string;
  };
}

export interface Comment {
  id: number;
  photo_url: string;
  autor: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  private photos: Photos[] = [{
    id: 2,
    photo_url: 'https://i.pinimg.com/originals/c0/df/81/c0df81890755b6f8f5dc8e9caeb37285.jpg',
    liked: false,
    description: 'Encomende o seu bolo já!!!',
    comment_count: 44,
    comment: [{
      id: 1,
      photo_url: 'https://uifaces.co/our-content/donated/gPZwCbdS.jpg',
      autor: 'Betão',
      message: 'Este bolo é d+'
    },
    {
      id: 2,
      photo_url: 'https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3759e09a5b9fbe53088b23c615b6312e',
      autor: 'Bettina',
      message: 'Maravilhoso'
    }
    ],
    place: 'Pindamonhangaba',
    user: {
      id: 50,
      photo_url: 'https://i.pinimg.com/originals/c8/07/72/c80772f03893efae04c114a96c3cff49.jpg',
      name: 'Mari Doces'
    }
  }, {
    id: 20,
    photo_url: 'https://www.cozinhaencantada.com.br/blog/wp-content/uploads/2018/10/bolos-de-anivers%C3%A1rio-personalizados-com-chantily14.jpg',
    liked: false,
    description: 'Fazemos bolos decorados!!!',
    comment_count: 30,
    comment: [{
      id: 1,
      autor: 'Cleberson',
      photo_url: 'https://randomuser.me/api/portraits/men/36.jpg',
      message: 'Minha filha adorou!'
    }],
    place: 'São Paulo, SP',
    user: {
      id: 23,
      photo_url: 'https://img2.gratispng.com/20180602/fqh/kisspng-logo-confectionery-brand-cake-frosting-icing-confeitaria-5b1249f0848426.1613583215279252325428.jpg',
      name: 'Confeitaria Jardim'
    }
  }, {
    id: 92,
    photo_url: 'https://festas.site/wp-content/uploads/2018/10/bolo-itaipava-papel-arroz4.jpg',
    liked: true,
    description: 'Bolos para todos os gostos!!!',
    comment_count: 3990,
    comment: [{
      id: 1,
      autor: 'Amélia',
      photo_url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNjk5NjE5NTczMV5BMl5BanBnXkFtZTcwODI0OTM0NA@@._V1_UY256_CR4,0,172,256_AL_.jpg',
      message: 'Adoraria receber rsrsrs'
    }],
    place: 'São Paulo, SP',
    user: {
      id: 45,
      photo_url: 'https://img.elo7.com.br/product/zoom/31FC62E/logo-para-confeitaria-logo-confeitaria.jpg',
      name: 'DoceSabor Confeitaria'
    }
  }, {
    id: 23,
    photo_url: 'https://pbs.twimg.com/media/EAlgK0IWkAERxwG.jpg',
    liked: false,
    description: 'Peça e junte a sua turma toda!!',
    comment_count: 80,
    comment: [{
      id: 1,
      autor: 'Lucas',
      photo_url: 'https://uifaces.co/our-content/donated/Xp0NB-TL.jpg',
      message: 'Quais os sabores?'
    }],
    place: 'New York',
    user: {
      id: 13,
      photo_url: 'https://s3-sa-east-1.amazonaws.com/projetos-artes/fullsize%2F2020%2F06%2F22%2F10%2FLogo-268468_6769_101116194_2045074125.jpg',
      name: 'Thais Bonatto Confeitaria'
    }
  },
  {
    id: 1,
    photo_url: 'https://www.festas.biz/wp-content/uploads/2019/01/bolo-skol-33-1024x1024.jpg',
    liked: true,
    description: 'Faça a sua festa direto do bar!!!',
    comment_count: 42,
    comment: [{
      id: 1,
      autor: 'Carlinhos',
      photo_url: 'https://randomuser.me/api/portraits/men/78.jpg',
      message: 'Kkkkkkkk!!'
    }],
    place: 'Santos, SP',
    user: {
      id: 5,
      photo_url: 'https://blog.agenciadosite.com.br/wp-content/uploads/2017/02/logo-doceforma-e1486903998967.jpg',
      name: 'Doce Forma'
    }
  },
  {
    id: 1,
    photo_url: 'https://scontent-yyz1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.108.864.864a/s640x640/120263195_654820642078622_7129361058334552863_n.jpg?_nc_ht=scontent-yyz1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=RfCYXxBY3bIAX9C4JUy&oh=565fcf899516ef36852692b0202bb16d&oe=5FA5F86F',
    liked: true,
    description: 'Faça a sua festa direto do bar!!!',
    comment_count: 42,
    comment: [{
      id: 1,
      autor: 'Carlinhos',
      photo_url: 'https://randomuser.me/api/portraits/men/78.jpg',
      message: 'Kkkkkkkk!!'
    }],
    place: 'Santos, SP',
    user: {
      id: 5,
      photo_url: 'https://blog.agenciadosite.com.br/wp-content/uploads/2017/02/logo-doceforma-e1486903998967.jpg',
      name: 'Doce Forma'
    }
  },

  ];

  constructor() { }

  public allPhotos() {
    return this.photos;
  }

  public findPhoto(id: number) {
    return this.photos.find(p => p.id === id);
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService2 {

  private photos2: Photos[] = [{
    id: 2,
    photo_url: 'https://www.tuacasa.com.br/wp-content/uploads/2020/03/bolo-dourado-20-730x730.jpg',
    liked: true,
    description: 'Lindíssimo bolo dourado, apenas R$ 1.500,00!!!',
    comment_count: 44,
    comment: [{
      id: 1,
      photo_url: 'https://uifaces.co/our-content/donated/gPZwCbdS.jpg',
      autor: 'Alfred',
      message: 'Este bolo é deveras maravilhoso'
    },
    {
      id: 2,
      photo_url: 'https://img.elo7.com.br/product/zoom/1D89B49/bolo-dourado-bolo-para-aluguel.jpg',
      autor: 'Bettina',
      message: 'Depois dos meus cursos sempre tem um!!!'
    }
    ],
    place: 'São Paulo, SP',
    user: {
      id: 50,
      photo_url: 'https://img.elo7.com.br/product/zoom/2415D56/logo-doceria-confeitaria-bolo.jpg',
      name: 'Sweet Treat Confeitaria'
    }
  }, {
    id: 20,
    photo_url: 'https://i.pinimg.com/originals/10/21/2b/10212b2aa5195b310a965d95e5674984.jpg',
    liked: true,
    description: 'Fazemos bolos decorados!!!',
    comment_count: 30,
    comment: [{
      id: 1,
      autor: 'Cleberson',
      photo_url: 'https://randomuser.me/api/portraits/men/36.jpg',
      message: 'Minha filha adorou!'
    }],
    place: 'São Paulo, SP',
    user: {
      id: 50,
      photo_url: 'https://img.elo7.com.br/product/zoom/2415D56/logo-doceria-confeitaria-bolo.jpg',
      name: 'Sweet Treat Confeitaria'
    }
  }, {
    id: 92,
    photo_url: 'https://img.elo7.com.br/product/original/270B6CD/bolo-cenografico-espatulado-branco-e-dourado-bolo.jpg',
    liked: true,
    description: 'Bolos para todos os gostos!!!',
    comment_count: 3990,
    comment: [{
      id: 1,
      autor: 'Amélia',
      photo_url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNjk5NjE5NTczMV5BMl5BanBnXkFtZTcwODI0OTM0NA@@._V1_UY256_CR4,0,172,256_AL_.jpg',
      message: 'Adoraria receber rsrsrs'
    }],
    place: 'São Paulo, SP',
    user: {
      id: 50,
      photo_url: 'https://img.elo7.com.br/product/zoom/2415D56/logo-doceria-confeitaria-bolo.jpg',
      name: 'Sweet Treat Confeitaria'
    }
  }, {
    id: 92,
    photo_url: 'https://i.pinimg.com/originals/73/de/86/73de86832150e5d49507bbc288a1126c.jpg',
    liked: true,
    description: 'Bolos para todos os gostos!!!',
    comment_count: 3990,
    comment: [{
      id: 1,
      autor: 'Amélia',
      photo_url: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNjk5NjE5NTczMV5BMl5BanBnXkFtZTcwODI0OTM0NA@@._V1_UY256_CR4,0,172,256_AL_.jpg',
      message: 'Adoraria receber rsrsrs'
    }],
    place: 'São Paulo, SP',
    user: {
      id: 50,
      photo_url: 'https://img.elo7.com.br/product/zoom/2415D56/logo-doceria-confeitaria-bolo.jpg',
      name: 'Sweet Treat Confeitaria'
    }
  },
  ];

  constructor() { }

  public allPhotos() {
    return this.photos2;
  }

  public findPhoto(id: number) {
    return this.photos2.find(p => p.id === id);
  }
}
