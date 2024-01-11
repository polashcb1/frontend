import {RoleConfigComponent} from "../private/access-control/role-config/role-config.component";
import {UserDetailsComponent} from "../private/access-control/user-details/user-details.component";

export class AccessControlConstant {

  public static readonly ACCESS_CONTROL_COMPONENT_MAP: Map<string, any> = new Map([
    ['roleConfig', {
    obj: RoleConfigComponent
    }],
    ['userDetails', {obj: UserDetailsComponent}]
  ])
}
