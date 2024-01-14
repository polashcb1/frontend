import {MoveMoneyComponent} from "../private/operations/move-money/move-money.component";
import {ExternalMoveMoneyComponent} from "../private/operations/external-move-money/external-move-money.component";
import {CustomerSummaryComponent} from "../private/operations/customer-summary/customer-summary.component";
import { BankTransfersComponent } from "../private/operations/bank-transfers/bank-transfers.component";
import { GenerateFacComponent } from "../private/operations/generate-fac/generate-fac.component";
import { FacCashWithdrawalComponent } from "../private/operations/faccash-withdrawal/faccash-withdrawal.component";
export class OperationsConstant {

  public static readonly OPERATIONS_COMPONENT_MAP: Map<string, any> = new Map([
    ['moveMoney', {
      obj: MoveMoneyComponent
    }],
    ['externalMoveMoney', {
      obj: ExternalMoveMoneyComponent
    }],
    ['customerSummary', {
          obj: CustomerSummaryComponent
        }],
    ['bankTransfers', {
      obj: BankTransfersComponent
    }],
    ['generateFac', {
      obj: GenerateFacComponent
    }],
    ['facCashWithdrawal', {
      obj: FacCashWithdrawalComponent
    }]
  ])
}
