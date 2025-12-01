using FluentMigrator;

namespace whey.Migrations.DefaultDB;

[DefaultDB, MigrationKey(20251122_1405)]
public class DefaultDB_20251122_1405_Review : AutoReversingMigration
{
    public override void Up()
    {
        Create.Table("Review")
            .WithColumn("Id").AsInt32().Identity().PrimaryKey().NotNullable()
            .WithColumn("SanPhamId").AsInt32().NotNullable()
            .WithColumn("KhachHangId").AsInt32().Nullable()
            .WithColumn("UserId").AsInt32().Nullable()
            .WithColumn("Rating").AsInt16().NotNullable().WithDefaultValue(5)
            .WithColumn("TieuDe").AsString(200).Nullable()
            .WithColumn("NoiDung").AsString(int.MaxValue).Nullable()
            .WithColumn("AnhReview").AsString(1000).Nullable()
            .WithColumn("DaDuyet").AsBoolean().NotNullable().WithDefaultValue(false)
            .WithColumn("SoLanHuuIch").AsInt32().NotNullable().WithDefaultValue(0)
            .WithColumn("BiAn").AsBoolean().NotNullable().WithDefaultValue(false)
            .WithColumn("CreatedAt").AsDateTime2().NotNullable()
             .WithDefault(SystemMethods.CurrentDateTime)
            .WithColumn("UpdatedAt").AsDateTime2().Nullable();
    }
}