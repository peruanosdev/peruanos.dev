import { Component } from '@angular/core';
import { GithubService } from '../../services/github/github.service';
import { IContributor } from '../../../../model/contributor.model';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-card-contributors',
  standalone: true,
  imports: [HttpClientModule],
  providers: [GithubService],
  templateUrl: './card-contributors.component.html',
  styleUrl: './card-contributors.component.scss'
})
export class CardContributorsComponent {
  listContributors: IContributor[] = [];

  constructor(private githubService: GithubService) {
    this.getContributors();
  }

  async getContributors() {
    await this.githubService.getContributors()
      .subscribe((data: any) => {
        this.listContributors = data;
      });
  }
}
