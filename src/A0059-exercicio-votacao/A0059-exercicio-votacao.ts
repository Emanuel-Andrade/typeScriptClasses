type VotationOptions = {
  numberOfVotes: number;
  option: string;
};

class Votation {
  private _votationOptions: VotationOptions[] = [];

  constructor(public details: string) {}

  addOption(option: VotationOptions): void {
    this._votationOptions.push(option);
  }

  vote(voteOption: number): void {
    if (!this._votationOptions[voteOption]) return;
    this._votationOptions[voteOption].numberOfVotes += 1;
  }
  get votationOptions(): VotationOptions[] {
    return this._votationOptions;
  }
}

class VotationApp {
  _votation: Votation[] = [];

  addVotation(votation: Votation): void {
    this._votation.push(votation);
  }
  showVotation(): void {
    for (const votations of this._votation) {
      console.log(votations.votationOptions);
    }
  }
}

const votation1 = new Votation('Torce p qual time?');
votation1.addOption({ option: 'flamengo', numberOfVotes: 0 });
votation1.addOption({ option: 'vasco', numberOfVotes: 0 });
votation1.addOption({ option: 'fluminense', numberOfVotes: 0 });
votation1.addOption({ option: 'botafogo', numberOfVotes: 0 });

votation1.vote(0);
votation1.vote(0);
votation1.vote(2);

const app = new VotationApp();

app.addVotation(votation1);
app.showVotation();
// module mode
export default Votation;
