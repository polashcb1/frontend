export interface NavigationItem {
  id: string;
  title: string;
  type: 'parent' | 'group' | 'component';
  icon?: string | null;
  component?: any | null;
  children?: NavigationItem[] | null;
}
