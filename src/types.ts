export interface FormInfo {
  name: string;
  faceImage?: string;
  track: Playlist;
  keyValue: Key;
  acceptCheckbox: boolean;
}

export type Key = "-2" | "-1" | "0" | "+1" | "+2";

export interface Playlist {
  id: number;
  name: string;
  track: string;
}

export interface KeyProps {
  keyValue: string | null;
  setKeyValue: React.Dispatch<React.SetStateAction<string | null>>;
  error: boolean;
}

export interface TrackInfoProps {
  setSelectedTrack: React.Dispatch<React.SetStateAction<Playlist | null>>;
  selectedTrack: Playlist | null;
  error: boolean;
}

export interface FileUploadProps {
  setFileInputText: React.Dispatch<React.SetStateAction<string>>;
  fileInputText: string;
  fileTypeError: boolean;
  setFileTypeError: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface CheckboxProps {
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
  checked: boolean;
  error: boolean;
}

export interface InputProps {
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  userName: string;
  error: boolean;
}

export type AlertModalProps = {
  formInfo: FormInfo | null;
  setFormInfo: React.Dispatch<React.SetStateAction<FormInfo | null>>;
};
