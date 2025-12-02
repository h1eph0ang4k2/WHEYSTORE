import { proxyTexts } from "@serenity-is/corelib";

namespace texts {
    export declare namespace Db {
        export function asKey(): typeof Db;
        export function asTry(): typeof Db;
        namespace Administration {
            export function asKey(): typeof Administration;
            export function asTry(): typeof Administration;
            namespace Language {
                export function asKey(): typeof Language;
                export function asTry(): typeof Language;
                export const EntityPlural: string;
                export const EntitySingular: string;
                export const LanguageId: string;
                export const LanguageName: string;
            }
            namespace Role {
                export function asKey(): typeof Role;
                export function asTry(): typeof Role;
                export const EntityPlural: string;
                export const EntitySingular: string;
                export const RoleId: string;
                export const RoleName: string;
            }
            namespace RolePermission {
                export function asKey(): typeof RolePermission;
                export function asTry(): typeof RolePermission;
                export const EntityPlural: string;
                export const EntitySingular: string;
                export const PermissionKey: string;
                export const RoleId: string;
                export const RoleName: string;
                export const RolePermissionId: string;
            }
            namespace User {
                export function asKey(): typeof User;
                export function asTry(): typeof User;
                export const DisplayName: string;
                export const Email: string;
                export const EntityPlural: string;
                export const EntitySingular: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastDirectoryUpdate: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Roles: string;
                export const Source: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
            }
            namespace UserPermission {
                export function asKey(): typeof UserPermission;
                export function asTry(): typeof UserPermission;
                export const EntityPlural: string;
                export const EntitySingular: string;
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }
            namespace UserRole {
                export function asKey(): typeof UserRole;
                export function asTry(): typeof UserRole;
                export const EntityPlural: string;
                export const EntitySingular: string;
                export const RoleId: string;
                export const RoleName: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }
        namespace SanPhamDB {
            export function asKey(): typeof SanPhamDB;
            export function asTry(): typeof SanPhamDB;
            namespace ChiTietDonHang {
                export function asKey(): typeof ChiTietDonHang;
                export function asTry(): typeof ChiTietDonHang;
                export const AnhSp: string;
                export const ChiTietDonHangId: string;
                export const DonGia: string;
                export const EntityPlural: string;
                export const EntitySingular: string;
                export const GiamGia: string;
                export const MaDh: string;
                export const MaSp: string;
                export const SoLuong: string;
                export const TenSp: string;
                export const ThanhTien: string;
            }
            namespace DanhMucSanPham {
                export function asKey(): typeof DanhMucSanPham;
                export function asTry(): typeof DanhMucSanPham;
                export const EntityPlural: string;
                export const EntitySingular: string;
                export const MaLoai: string;
                export const MoTa: string;
                export const TenLoai: string;
            }
            namespace DanhMucTinTuc {
                export function asKey(): typeof DanhMucTinTuc;
                export function asTry(): typeof DanhMucTinTuc;
                export const EntityPlural: string;
                export const EntitySingular: string;
                export const HienThi: string;
                export const MaDm: string;
                export const MoTa: string;
                export const Slug: string;
                export const TenDm: string;
                export const ThuTu: string;
            }
            namespace DonHang {
                export function asKey(): typeof DonHang;
                export function asTry(): typeof DonHang;
                export const CreatedAt: string;
                export const DaThanhToan: string;
                export const DiaChiNguoiNhan: string;
                export const EmailNguoiNhan: string;
                export const EntityPlural: string;
                export const EntitySingular: string;
                export const GhiChu: string;
                export const GiamGiaDonHang: string;
                export const HoTenNguoiNhan: string;
                export const MaBuuChinhNguoiNhan: string;
                export const MaDh: string;
                export const MaKhachHang: string;
                export const NgayDatHang: string;
                export const NgayGiaoHangDuKhien: string;
                export const NgayGiaoHangHoanThanh: string;
                export const PhiVanChuyen: string;
                export const PhuongThucThanhToan: string;
                export const PhuongXaNguoiNhan: string;
                export const QuanHuyenNguoiNhan: string;
                export const ShipperId: string;
                export const SoDienThoaiNguoiNhan: string;
                export const TinhThanhNguoiNhan: string;
                export const TongThanhToan: string;
                export const TongTienHang: string;
                export const TrangThaiDonHang: string;
                export const UpdatedAt: string;
            }
            namespace GioHang {
                export function asKey(): typeof GioHang;
                export function asTry(): typeof GioHang;
                export const EntityPlural: string;
                export const EntitySingular: string;
                export const GhiChu: string;
                export const GiaLucThem: string;
                export const Id: string;
                export const MaSp: string;
                export const MaSpTenSp: string;
                export const NgayTao: string;
                export const SoLuong: string;
                export const UserId: string;
                export const Username: string;
            }
            namespace KhachHang {
                export function asKey(): typeof KhachHang;
                export function asTry(): typeof KhachHang;
                export const DiaChi: string;
                export const DienThoai: string;
                export const Email: string;
                export const EntityPlural: string;
                export const EntitySingular: string;
                export const GioiTinh: string;
                export const HoTen: string;
                export const Id: string;
                export const MaBuuChinh: string;
                export const NgaySinh: string;
                export const QuanHuyenId: string;
                export const QuanHuyenTen: string;
                export const TinhThanhId: string;
                export const TinhThanhTen: string;
                export const UserId: string;
                export const XaPhuongId: string;
                export const XaPhuongTen: string;
            }
            namespace MaGiamGia {
                export function asKey(): typeof MaGiamGia;
                export function asTry(): typeof MaGiamGia;
                export const DonToiThieu: string;
                export const EntityPlural: string;
                export const EntitySingular: string;
                export const GiaTri: string;
                export const Id: string;
                export const IsActive: string;
                export const LoaiGiam: string;
                export const MaCode: string;
                export const MoTa: string;
                export const NgayBatDau: string;
                export const NgayKetThuc: string;
                export const SoLanDungMoiKhach: string;
                export const SoLanDungToiDa: string;
            }
            namespace NhaCungCap {
                export function asKey(): typeof NhaCungCap;
                export function asTry(): typeof NhaCungCap;
                export const ChucDanhLienHe: string;
                export const CreatedAt: string;
                export const DiaChi: string;
                export const EntityPlural: string;
                export const EntitySingular: string;
                export const MaBuuChinh: string;
                export const MaNcc: string;
                export const MaSoThue: string;
                export const QuocGia: string;
                export const SoDienThoai: string;
                export const TenCongTy: string;
                export const TenLienHe: string;
                export const ThanhPho: string;
                export const TrangChu: string;
            }
            namespace QuaTang {
                export function asKey(): typeof QuaTang;
                export function asTry(): typeof QuaTang;
                export const Anh: string;
                export const EntityPlural: string;
                export const EntitySingular: string;
                export const GiaTri: string;
                export const Id: string;
                export const MoTa: string;
                export const TenQua: string;
            }
            namespace QuanHuyen {
                export function asKey(): typeof QuanHuyen;
                export function asTry(): typeof QuanHuyen;
                export const EntityPlural: string;
                export const EntitySingular: string;
                export const Id: string;
                export const TenQuanHuyen: string;
                export const TinhThanhId: string;
                export const TinhThanhTen: string;
            }
            namespace Review {
                export function asKey(): typeof Review;
                export function asTry(): typeof Review;
                export const AnhReview: string;
                export const BiAn: string;
                export const CreatedAt: string;
                export const DaDuyet: string;
                export const EntityPlural: string;
                export const EntitySingular: string;
                export const Id: string;
                export const KhachHangId: string;
                export const NoiDung: string;
                export const Rating: string;
                export const SanPhamId: string;
                export const SoLanHuuIch: string;
                export const TieuDe: string;
                export const UpdatedAt: string;
                export const UserId: string;
            }
            namespace SanPham {
                export function asKey(): typeof SanPham;
                export function asTry(): typeof SanPham;
                export const AnhSp: string;
                export const AnhSpCt: string;
                export const CreatedAt: string;
                export const DanhMucSanPham: string;
                export const EntityPlural: string;
                export const EntitySingular: string;
                export const GiaBan: string;
                export const GiaKhuyenMai: string;
                export const GiamGia: string;
                export const HienThi: string;
                export const HuongViList: string;
                export const MaLoai: string;
                export const MaSp: string;
                export const MoTa: string;
                export const NhaCungCap: string;
                export const SoLuong: string;
                export const TenNhaCungCap: string;
                export const TenSp: string;
                export const TenThuongHieu: string;
                export const ThuongHieuId: string;
                export const UpdatedAt: string;
            }
            namespace SanPhamBienThe {
                export function asKey(): typeof SanPhamBienThe;
                export function asTry(): typeof SanPhamBienThe;
                export const EntityPlural: string;
                export const EntitySingular: string;
                export const GiaBan: string;
                export const GiaKhuyenMai: string;
                export const Id: string;
                export const IsDefault: string;
                export const SanPhamId: string;
                export const SanPhamTenSp: string;
                export const SoLuong: string;
                export const TenBienThe: string;
            }
            namespace SanPhamChiTiet {
                export function asKey(): typeof SanPhamChiTiet;
                export function asTry(): typeof SanPhamChiTiet;
                export const Calories: string;
                export const EntityPlural: string;
                export const EntitySingular: string;
                export const HamLuongBcaa: string;
                export const HamLuongProtein: string;
                export const Id: string;
                export const SanPhamId: string;
                export const SanPhamTenSp: string;
                export const SoLanDungMax: string;
                export const SoLanDungMin: string;
                export const TrongLuongText: string;
                export const XuatXu: string;
            }
            namespace SanPhamHuongVi {
                export function asKey(): typeof SanPhamHuongVi;
                export function asTry(): typeof SanPhamHuongVi;
                export const EntityPlural: string;
                export const EntitySingular: string;
                export const Id: string;
                export const IsDefault: string;
                export const SanPhamId: string;
                export const SanPhamTenSp: string;
                export const TenHuongVi: string;
            }
            namespace SanPhamHuongViLink {
                export function asKey(): typeof SanPhamHuongViLink;
                export function asTry(): typeof SanPhamHuongViLink;
                export const EntityPlural: string;
                export const EntitySingular: string;
                export const HuongViId: string;
                export const HuongViTenHuongVi: string;
                export const Id: string;
                export const SanPhamId: string;
                export const SanPhamTenSp: string;
            }
            namespace SanPhamLienQuan {
                export function asKey(): typeof SanPhamLienQuan;
                export function asTry(): typeof SanPhamLienQuan;
                export const EntityPlural: string;
                export const EntitySingular: string;
                export const Id: string;
                export const SanPhamId: string;
                export const SanPhamLienQuanId: string;
                export const SanPhamLienQuanTenSp: string;
                export const SanPhamTenSp: string;
            }
            namespace SanPhamNoiDung {
                export function asKey(): typeof SanPhamNoiDung;
                export function asTry(): typeof SanPhamNoiDung;
                export const EntityPlural: string;
                export const EntitySingular: string;
                export const Id: string;
                export const LoaiSection: string;
                export const NoiDungHtml: string;
                export const SanPhamId: string;
                export const SanPhamTenSp: string;
                export const ThuTu: string;
                export const TieuDe: string;
            }
            namespace SanPhamQuaTang {
                export function asKey(): typeof SanPhamQuaTang;
                export function asTry(): typeof SanPhamQuaTang;
                export const EntityPlural: string;
                export const EntitySingular: string;
                export const Id: string;
                export const IsDefault: string;
                export const QuaTangId: string;
                export const QuaTangTenQua: string;
                export const SanPhamId: string;
                export const SanPhamTenSp: string;
                export const ThuTu: string;
            }
            namespace Shippers {
                export function asKey(): typeof Shippers;
                export function asTry(): typeof Shippers;
                export const EntityPlural: string;
                export const EntitySingular: string;
                export const MaShipper: string;
                export const MaShipperCode: string;
                export const SoDienThoai: string;
                export const TenCongTy: string;
                export const TenShipper: string;
            }
            namespace ThuongHieu {
                export function asKey(): typeof ThuongHieu;
                export function asTry(): typeof ThuongHieu;
                export const CreatedAt: string;
                export const EntityPlural: string;
                export const EntitySingular: string;
                export const HienThi: string;
                export const Id: string;
                export const Logo: string;
                export const MoTa: string;
                export const NoiBat: string;
                export const Slug: string;
                export const TenThuongHieu: string;
                export const ThuTu: string;
                export const UpdatedAt: string;
            }
            namespace TinTuc {
                export function asKey(): typeof TinTuc;
                export function asTry(): typeof TinTuc;
                export const AnhBia: string;
                export const DanhMucId: string;
                export const EntityPlural: string;
                export const EntitySingular: string;
                export const IsHot: string;
                export const IsPublished: string;
                export const NgayCapNhat: string;
                export const NgayDang: string;
                export const NoiDungHtml: string;
                export const SeoDescription: string;
                export const SeoTitle: string;
                export const Slug: string;
                export const TacGia: string;
                export const TieuDe: string;
                export const TinTucId: string;
                export const TomTat: string;
                export const ViewCount: string;
            }
            namespace TinhThanh {
                export function asKey(): typeof TinhThanh;
                export function asTry(): typeof TinhThanh;
                export const EntityPlural: string;
                export const EntitySingular: string;
                export const Id: string;
                export const TenTinhThanh: string;
            }
            namespace XaPhuong {
                export function asKey(): typeof XaPhuong;
                export function asTry(): typeof XaPhuong;
                export const EntityPlural: string;
                export const EntitySingular: string;
                export const Id: string;
                export const QuanHuyenId: string;
                export const QuanHuyenTen: string;
                export const TenXaPhuong: string;
            }
        }
    }
    export declare namespace Forms {
        export function asKey(): typeof Forms;
        export function asTry(): typeof Forms;
        namespace Membership {
            export function asKey(): typeof Membership;
            export function asTry(): typeof Membership;
            namespace Login {
                export function asKey(): typeof Login;
                export function asTry(): typeof Login;
                export const ForgotPassword: string;
                export const LoginToYourAccount: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }
            namespace SignUp {
                export function asKey(): typeof SignUp;
                export function asTry(): typeof SignUp;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
        export const SiteTitle: string;
    }
    export declare namespace Site {
        export function asKey(): typeof Site;
        export function asTry(): typeof Site;
        namespace AccessDenied {
            export function asKey(): typeof AccessDenied;
            export function asTry(): typeof AccessDenied;
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }
        namespace Layout {
            export function asKey(): typeof Layout;
            export function asTry(): typeof Layout;
            export const Language: string;
            export const Theme: string;
        }
        namespace RolePermissionDialog {
            export function asKey(): typeof RolePermissionDialog;
            export function asTry(): typeof RolePermissionDialog;
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }
        namespace UserDialog {
            export function asKey(): typeof UserDialog;
            export function asTry(): typeof UserDialog;
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }
        namespace UserPermissionDialog {
            export function asKey(): typeof UserPermissionDialog;
            export function asTry(): typeof UserPermissionDialog;
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }
        namespace ValidationError {
            export function asKey(): typeof ValidationError;
            export function asTry(): typeof ValidationError;
            export const Title: string;
        }
    }
    export declare namespace Validation {
        export function asKey(): typeof Validation;
        export function asTry(): typeof Validation;
        export const AuthenticationError: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const PasswordConfirmMismatch: string;
        export const SavePrimaryKeyError: string;
    }

}

const Texts: typeof texts = proxyTexts({}, '', {
    Db: {
        Administration: {
            Language: {},
            Role: {},
            RolePermission: {},
            User: {},
            UserPermission: {},
            UserRole: {}
        },
        SanPhamDB: {
            ChiTietDonHang: {},
            DanhMucSanPham: {},
            DanhMucTinTuc: {},
            DonHang: {},
            GioHang: {},
            KhachHang: {},
            MaGiamGia: {},
            NhaCungCap: {},
            QuaTang: {},
            QuanHuyen: {},
            Review: {},
            SanPham: {},
            SanPhamBienThe: {},
            SanPhamChiTiet: {},
            SanPhamHuongVi: {},
            SanPhamHuongViLink: {},
            SanPhamLienQuan: {},
            SanPhamNoiDung: {},
            SanPhamQuaTang: {},
            Shippers: {},
            ThuongHieu: {},
            TinTuc: {},
            TinhThanh: {},
            XaPhuong: {}
        }
    },
    Forms: {
        Membership: {
            Login: {},
            SignUp: {}
        }
    },
    Site: {
        AccessDenied: {},
        Layout: {},
        RolePermissionDialog: {},
        UserDialog: {},
        UserPermissionDialog: {},
        ValidationError: {}
    },
    Validation: {}
}) as any;

export const AccessDeniedViewTexts = Texts.Site.AccessDenied;
export const LoginFormTexts = Texts.Forms.Membership.Login;
export const MembershipValidationTexts = Texts.Validation;
export const RolePermissionDialogTexts = Texts.Site.RolePermissionDialog;
export const SignUpFormTexts = Texts.Forms.Membership.SignUp;
export const SiteFormTexts = Texts.Forms;
export const SiteLayoutTexts = Texts.Site.Layout;
export const SqlExceptionHelperTexts = Texts.Validation;
export const UserDialogTexts = Texts.Site.UserDialog;
export const UserPermissionDialogTexts = Texts.Site.UserPermissionDialog;
export const ValidationErrorViewTexts = Texts.Site.ValidationError;