import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { CardCommunityDetailComponent } from "../../components/card-community-detail/card-community-detail.component";
import { dataCommunities } from '../../../../_data/communities';
import { ICommunity } from '../../../../model/community.model';
import { CardContributorsComponent } from "../../components/card-contributors/card-contributors.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  imports: [HeaderComponent, FooterComponent, CardCommunityDetailComponent, CardContributorsComponent, FormsModule]
})
export class HomePageComponent {
  communityList = dataCommunities;
  citiesList;

  constructor() {
    this.citiesList = this.getListCities(this.communityList);
  }

  getListCities(communities: ICommunity[]) {
    const cities = new Set();
    communities.forEach((item: ICommunity) => {
      cities.add(item.city);
    });
    return Array.from(cities);
  }

  filterByCity(event: any) {
    if (event.target.value === 'all') {
      this.communityList = dataCommunities;
      return;
    }
    this.communityList = dataCommunities.filter((item: ICommunity) => item.city === event.target.value);
  }
}
